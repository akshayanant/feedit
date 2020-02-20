package com.heiseneberg.feedit.models;

import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

/**
 * Created by Akshay Hegde on 2/18/2020.
 */

@MappedSuperclass
public abstract class BaseFeedPost {
    @Column(updatable = false)
    @UpdateTimestamp
    private LocalDateTime timestamp;

    public LocalDateTime getTimestamp(){
        return timestamp;
    }
}
