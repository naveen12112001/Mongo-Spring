package com.example.backendmongo;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User,Integer> {
}
