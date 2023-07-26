import axios, { AxiosResponse } from "axios";
import { IFormValues } from "../types";
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

  static getOtp = (body: {
    email: string;
    password: string;
  }): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .post("/api/auth/generate-otp", body)
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  static verifyOtp = (body: {
    email: string;
    password: string;
    otp: string;
  }): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .post("/api/auth/verify-otp", body)
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  static resetPassword = (body: {
    old_password: string;
    new_password: string;
  }): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .post("/api/auth/reset-password", body)
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  static logout = (): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .post("/api/auth/logout")
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  static getCountries = (): Promise<AxiosResponse> => {
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

  static getStates = (countryId: number): Promise<AxiosResponse> => {
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

  static getCities = (stateId: number): Promise<AxiosResponse> => {
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

  static getDepartments = (): Promise<AxiosResponse> => {
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

  static getKycList = (): Promise<AxiosResponse> => {
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

  static storeCustomer = (formValues: IFormValues): Promise<AxiosResponse> => {
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

  static deleteCustomer = (id: number): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .delete(`/api/admin/customers/${id}`)
        .then((response) => {
          return resolve(response);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  static updateCustomer = (body: any): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .put(`/api/admin/customers/${body.id}`, body)
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };
}

export default ApiService;
