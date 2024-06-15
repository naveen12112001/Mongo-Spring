package com.example.backendmongo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class UserService {
    @Autowired
    private UserRepo repo;
    public String saveUser(User user){
        repo.save(user);
        return "Added Successfully";
    }
    public List<User> getUsers() {
        return repo.findAll();
    }
    public Optional<User> getUserById(String id) {
        return repo.findById(id);
    }
    public String deleteUser(String id){
        repo.deleteById(id);
        return "Deleted Successfully";
    }
    public String updateUser(User user){
        repo.save(user);
        return "Updated Succesfully!!!";
    }
    public String patchUser(String id,User user){
        Optional<User> existingUser=repo.findById(id);
        if(!(user.getUsername() ==null)){
            existingUser.get().setUsername(user.getUsername());
        }
        if(!(user.getUserage() ==0)){
            existingUser.get().setUserage(user.getUserage());
        }
        if(!(user.getUserlocation() ==null)){
            existingUser.get().setUserlocation(user.getUserlocation());
        }
        if(!(user.getUseremail() ==null)){
            existingUser.get().setUseremail(user.getUseremail());
        }
        if(!(user.getUserorders() ==0)){
            existingUser.get().setUserorders(user.getUserorders());
        }
        if(!(user.getUserphone() ==null)){
            existingUser.get().setUserphone(user.getUserphone());
        }
        repo.save(existingUser.get());
        return "Updated the field successfully";
    }
}
