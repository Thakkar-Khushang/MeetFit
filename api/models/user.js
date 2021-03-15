class User {
    constructor(id, name, email, phoneNumber, location, filter, img_url, description, password, confPassword){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.location = location;
        this.filter = filter;
        this.img_url = img_url;
        this.description = description;
        this.password = password;
        this.confPassword = confPassword;
    }
}

module.exports = User;