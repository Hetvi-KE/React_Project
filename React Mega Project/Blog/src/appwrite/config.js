import conf from '../conf/conf';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    Databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.Databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {

            return await this.Databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug, {
                title,
                content,
                featuredImage,
                status,
                userId,
            }
            )

        } catch (error) {
            console.log("Appwrite service :: createPost:: error", error)
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {

            return await this.Databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug,

                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Apprwrite service :: updatePost:: error", error);
        }
    }

    async deletePost({ slug }) {

        try {

            await this.Databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug
            )

            return true;

        } catch (error) {
            console.log("appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.Databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug
            )


        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;

        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {

            return await this.Databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                queries,
            )

        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
        }
    }

    // file upload service 
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )

        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
        }
    }

    // delete file service 
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
            return true;

        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        try {

            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId,
            )

        } catch (error) {
            console.log("Appwrite service :: getFilePreview :: error", error);
            return false;
        }
    }

}
const service = new Service();

export default service;
