const moongoose = require('mongoose');

mongoose.connect('mongodb+srv://studyUser:<db_password>@cluster0.vsg20la.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Atlas 연결 성공!');
}).catch((err) => {
    console.error('연결 실패:', err);
});