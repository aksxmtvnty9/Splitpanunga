// Please map the schema from the json

// For users table
const users = {
  id: 'numeric, auto increment, primary key',
  name:'text',
  email: 'text',
  password:  'text',
  status:  'text',
  mobile_number: 'numeric',
  is_email_verified: 'boolean',
  is_phone_verified:'boolean',
}

// For payments table
const payments = {
  id: 'numeric, auto increment, primary key',
  user_id: 'numeric',
  owe_id: 'numeric',
  amount: 'numeric',
  create_at: 'date',
  updated_at: 'date',
  deleted_at: 'numeric',
}

// For paymentsDone table
const paymentsDone = {
  id: 'numeric, auto increment, primary key',
  user_id: 'numeric',
  owe_id: 'numeric',
  amount: 'numeric',
  create_at: 'numeric',

}
