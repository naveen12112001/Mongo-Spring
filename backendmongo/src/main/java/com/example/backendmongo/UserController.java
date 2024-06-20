package com.example.backendmongo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    public UserService userService;

    @PostMapping("/addUser")
    public String saveController(@RequestBody User user){
        userService.saveUser(user);
        return "Added Successfully";
    }

    @GetMapping("/findAllUsers")
    public List<User> findAllController() {
        return userService.getUsers();
    }
    @GetMapping("/findUserById/{id}")
    public Optional<User> idController(@PathVariable("id") String id) {
        return userService.getUserById(id);
    }

    @DeleteMapping("/deleteUser/{id}")
    public String deleteController(@PathVariable String id){
        userService.deleteUser(id);
        return "Deleted Successfully";
    }
    @PatchMapping("/patchUser/{id}")
    public String patchUpdateController(@PathVariable("id") String _id, @RequestBody User user){
        return userService.patchUser(_id,user);
    }
    @PutMapping(value="/updateUser/{id}")
    public User updateController(@PathVariable("id") String _id, @RequestBody User user) {
        user.set_id(_id);
        userService.updateUser(user);
        return user;
    }


}
