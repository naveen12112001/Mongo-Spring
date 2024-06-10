package com.example.backendmongo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    @Autowired
    private UserRepo repo;

    @PostMapping("/addUser")
    public String saveUser(@RequestBody User user){
        repo.save(user);
        return "Added Successfully";
    }

    @GetMapping("/findAllUsers")
    public List<User> getUsers() {

        return repo.findAll();
    }
    @GetMapping("/findUserById/{id}")
    public String getUserById(@PathVariable int id) {

        repo.findById(id);
        return "Returned user.";
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable int id){
        repo.deleteById(id);
        return "Deleted Successfully";
    }
    @PutMapping
    public String updateUser(@RequestBody User user){
        repo.save(user);
        return "Updated Successfully";
    }
}
