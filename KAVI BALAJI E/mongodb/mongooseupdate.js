const mongoose = require('mongoose');

// Define schemas
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    skillName: String,
    experience: Number,
    proficiency: String
});

const jobSeekerSchema = new Schema({
    jobseekerName: String,
    emailId: String,
    age: Number,
    certified: Boolean,
    skills: [skillSchema]
});

// Define model
const JobSeeker = mongoose.model('Person', jobSeekerSchema);

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/aspire", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;

// Event handling for MongoDB connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB');

    try {
        // Create a new job seeker instance
        const jobseeker1 = new js({
            jobseekerName: "Raj",
            age: 22,
            emailId: "raj@test.com",
            certified: true,
            skills: [
                { skillName: "java", experience: 1, proficiency: "beginner" },
                { skillName: "angular", experience: 2, proficiency: "intermediate" }
            ]
        });

        // Save the job seeker instance
        await jobseeker1.save();
        console.log('Job seeker saved successfully');

        // Find one job seeker by name 
        const foundJobSeeker = await js.findOneandUpdate({ jobseekerName: "Raj" },{age:37},{new:true});

        if (foundJobSeeker) {
            console.log('Found job seeker:', foundJobSeeker);
        } else {
            console.log('Job seeker not found');
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the database connection
        mongoose.connection.close();
    }
});
