import 'dotenv/config';
import mongoose from 'mongoose';

export const runApp = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            // useFindAndModify: false,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true,
        });
        console.log(`Successfully connected to database ${process.env.MONGO_DB}`);

        
    } catch (err) {
        console.log(err);
        
    }
};

