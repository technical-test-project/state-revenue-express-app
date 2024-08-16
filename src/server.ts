import "reflect-metadata"
import app from './app';
import {AppDataSource} from './config/data-source';

const PORT = process.env.PORT || 3001

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);

    if (AppDataSource.isInitialized) {
        AppDataSource.synchronize().then(() => {
            console.log("Initializing synchronization...")
        })
    } else {
        AppDataSource.initialize()
            .then((value) => {
                console.log("Data Source has been initialized!")
            })
            .catch((err) => {
                console.error("Error during Data Source initialization", err)
            })

    }

});

