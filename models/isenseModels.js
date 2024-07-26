import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: { type: String, unique: true },
  email: { type: String, unique: true },
  idType: String,
  idNo: String,
  emailVerified: Date,
  image: String,
  password: String,
  gender: String,
  address: String,
  phone: String,
  sensors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sensor' }],
  age: Number,
  role: { type: String, default: 'USER', enum: ['ADMIN', 'USER'] },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const LastReadingSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  smokeLevel: Number,
  sensor: { type: mongoose.Schema.Types.ObjectId, ref: 'Sensor' },
  sensorId: { type: mongoose.Schema.Types.ObjectId, unique: true },
});

const SensorSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  location: String,
  lastReading: { type: mongoose.Schema.Types.ObjectId, ref: 'LastReading' },
  lastReadingId: { type: mongoose.Schema.Types.ObjectId, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  userId: { type: mongoose.Schema.Types.ObjectId },
});

const AlertSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  userID: { type: mongoose.Schema.Types.ObjectId },
  sensorID: { type: mongoose.Schema.Types.ObjectId },
  timestamp: { type: Date, default: Date.now },
  type: String,
  status: String,
  description: String,
  additionalInfo: String,
});

const FireDepartmentSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  deptName: String,
  contactInfo: String,
  assignedAlerts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AssignedAlert' }],
});

const AssignedAlertSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  alertID: { type: mongoose.Schema.Types.ObjectId },
  assignedTo: String,
  timestamp: { type: Date, default: Date.now },
  status: String,
  notes: String,
  fireDepartment: { type: mongoose.Schema.Types.ObjectId, ref: 'FireDepartment' },
  fireDepartmentId: { type: mongoose.Schema.Types.ObjectId },
});

const User = mongoose.model('User', UserSchema);
const LastReading = mongoose.model('LastReading', LastReadingSchema);
const Sensor = mongoose.model('Sensor', SensorSchema);
const Alert = mongoose.model('Alert', AlertSchema);
const FireDepartment = mongoose.model('FireDepartment', FireDepartmentSchema);
const AssignedAlert = mongoose.model('AssignedAlert', AssignedAlertSchema);

export { User, LastReading, Sensor, Alert, FireDepartment, AssignedAlert };
