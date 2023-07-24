import axios, { AxiosResponse } from "axios";
import { FormValues } from "../types";
const baseURL = "http://localhost:4000";
class ApiService {
  static apiServer = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
  });

  // static register = ({ firstname, lastname, department, country, state, city, email, phone, password, repeat_password }) => {
  //     return new Promise((resolve, reject) => {
  //         this.apiServer
  //             .post('/api/auth/register', {
  //                 first_name: firstname,
  //                 last_name: lastname,
  //                 department,
  //                 country,
  //                 state,
  //                 city,
  //                 email,
  //                 phone,
  //                 password,
  //                 repeat_password
  //             })
  //             .then((response) => {
  //                 return resolve(response);
  //             })
  //             .catch((error) => {
  //                 return reject(error);
  //             });
  //     });
  // };

  static login = ({ email, password }: { email: string; password: string }) => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .post("/api/auth/login", {
          email,
          password,
        })
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  // static logout = ({ refreshToken }: {}) => {
  //     return new Promise((resolve, reject) => {
  //         this.apiServer
  //             .post('/api/auth/logout', {
  //                 refreshToken
  //             })
  //             .then((response) => {
  //                 return resolve(response);
  //             })
  //             .catch((error) => {
  //                 return reject(error);
  //             });
  //     });
  // };

  static getCountries = () => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get("/api/location/countries?country")
        .then((response) => {
          return resolve(response);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  static getStates = (countryId: number) => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get(`/api/location/states?country=${countryId}`)
        .then((response) => {
          return resolve(response);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  static getCities = (stateId: number) => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get(`/api/location/cities?state=${stateId}`)
        .then((response) => {
          return resolve(response);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  static getDepartments = () => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get(`/api/departments`)
        .then((response) => {
          return resolve(response);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  static getKycList = () => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get(`/api/kyc`)
        .then((response) => {
          return resolve(response);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  static storeCustomer = (formValues: FormValues) => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .post("/api/admin/customers", formValues)
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  static getCustomers = (): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get(`/api/admin/customers`)
        .then((response) => {
          return resolve(response);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  static viewCustomer = (id: string): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get(`/api/admin/customers/${id}`)
        .then((response) => {
          return resolve(response);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  static deleteCustomer = (id: number) => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .delete(`/api/customer/${id}`)
        .then((response) => {
          return resolve(response);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  // static updateCustomer = ({ id, first_name, last_name, country, state, city, email, phone, shop, kyc }: object) => {
  //     return new Promise((resolve, reject) => {
  //         this.apiServer
  //             .put(`/api/customer/${id}`, {
  //                 first_name,
  //                 last_name,
  //                 country,
  //                 state,
  //                 city,
  //                 email,
  //                 phone,
  //                 shop,
  //                 kyc
  //             })
  //             .then((response) => {
  //                 return resolve(response);
  //             })
  //             .catch((error) => {
  //                 return reject(error);
  //             });
  //     });
  // };
}

export default ApiService;
