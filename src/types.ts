
export interface ICustomer {
  id:            string;
  first_name:    string;
  middle_name:   string;
  last_name:     string;
  phone:         string;
  email:         string;
  password:      string;
  date_of_birth: string;
  gender:        string;
  account_id:    string;
  address_id:    string;
  document_id:   string;
  createdAt:     string;
  updatedAt:     string;
  account:       IAccount;
  address:       IAddress;
  document:      IDocument;
}

export interface IAccount {
  id:                    string;
  account_type:          string;
  account_number:        string;
  ifsc_code:             string;
  account_balance:       string;
  document_id:           string;
  createdAt:             string;
  updatedAt:             string;
  Customer:              { [key: string]: string }[];
  Document:              Document;
  received_transactions: any[];
  sent_transactions:     any[];
}

export interface IAddress {
  id:        string;
  type:      string;
  country:   string;
  state:     string;
  city:      string;
  district:  string;
  landmark:  string;
  createdAt: string;
  updatedAt: string;
}

export interface IDocument {
  id:              string;
  document_type:   string;
  document_number: string;
  customerId:      null;
  createdAt:       string;
  updatedAt:       string;
}


export interface IFormValues {
  [x: string]: any;
  first_name: string;
  middle_name: string;
  last_name: string;
  phone: string;
  email: string;
  date_of_birth: string;
  gender: string;
  document_type: string;
  document_number: string;
  state: string;
  city: string;
  district: string;
  landmark: string;
  account_type: string;
  account_balance: string;
  submit: string;
  // Accounts: any[];
  // Addreses: any[]
}