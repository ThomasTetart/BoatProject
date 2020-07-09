package com.goat.simpleProject.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "Boat")
public class Boat implements Serializable {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private String description;


    public Long getId(){
        return id;
    }
    public void setName(String v){
        name=v;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public String getName() {
        return name;
    }
}
