import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
    const client = await MongoClient.connect(
        'mongodb+srv://adi1:jPEah5KHuEPo45Xm@cluster0.usjbg.mongodb.net/next-auth?retryWrites=true&w=majority'
    );

    return client;
};
