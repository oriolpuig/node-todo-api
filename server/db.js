import mongoose from 'mongoose';

export default function (app, db, port) {
    mongoose.connect(db);

    app.listen(port, (err) => {
        if (err) throw err;
        console.log(`App listening on port ${port}`);
    });

    mongoose.connection.on('connected', () => {
        console.log(`Mongoose default connection open to ${db}`);
    });
};
