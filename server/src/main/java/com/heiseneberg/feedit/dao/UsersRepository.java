package com.heiseneberg.feedit.dao;

import com.heiseneberg.feedit.models.UserDetails;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Akshay Hegde on 2/25/2020.
 */
public interface UsersRepository extends CrudRepository<UserDetails,String> {
}
