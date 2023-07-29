import axios, { AxiosResponse } from "axios";
const baseURL = "http://localhost:4000";
class AccountService {
  static apiServer = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
  });

  static getAccounts = (): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get("/api/admin/accounts")
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  static getAccountLogs = (): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get("/api/admin/accounts/logs")
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  static viewAccounts = (id: string): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get(`/api/admin/accounts/${id}`)
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  static deleteAccounts = (id: string): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .delete(`/api/admin/accounts/${id}`)
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  static updateAccounts = (
    id: string,
    account_type: string
  ): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .put(`/api/admin/accounts/${id}`, { account_type })
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  static getMyProfile = (): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get(`/api/me`)
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  static withdrawMoney = (amount: string): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .post("/api/me/account/withdraw", { amount })
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  static depositeMoney = (amount: string): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .post("/api/me/account/deposite", { amount })
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  static getMyTransactions = (): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get("/api/me/account/transactions")
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  static getMyAccountHistory = (): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get("/api/me/account/history")
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  static getAllAccountHistory = (): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get("/api/admin/accounts/history")
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  static getAllDetails = (): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
      this.apiServer
        .get("/api/admin/details")
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };
}
export default AccountService;
