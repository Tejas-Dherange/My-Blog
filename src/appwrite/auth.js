import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthServices {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
    const userAccount = await   this.account.create(
      ID.unique(),
      email,
      password,
      name
    );
      if (userAccount) {
        return this.logIn({ email, password });
        //another method
      }
      else{
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async logIn({ email, password }) {
    try {
     return  await   this.account.createEmailSession(email, password);
        //  return this.logIn({email,password})
    } catch (error) {
      throw error;
    }
  }
  async getUserAcc() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("There some error occured", error);
    }
    return null;
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: Error:: Logout", error);
    }
  }
}
const authServices = new AuthServices();
export default authServices;
