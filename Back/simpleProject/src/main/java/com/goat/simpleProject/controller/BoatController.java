package com.goat.simpleProject.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.goat.simpleProject.model.Boat;
import com.goat.simpleProject.repositories.IBoat;
import jdk.nashorn.internal.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*",maxAge = 3600)
@RequestMapping("/boat")
public class BoatController {

    @Autowired
    private IBoat boatRep;

    @GetMapping("")
    public ResponseEntity getBoats(){
        return ResponseEntity.ok(boatRep.findAll());
    }

    @GetMapping("/detail/{idBoat}")
    public ResponseEntity detail(@PathVariable(name = "idBoat") Long idBoat){

        if(idBoat == null){
            return ResponseEntity.badRequest().body("Error params");
        }
        return ResponseEntity.ok(boatRep.findById(idBoat));
    }

    @PostMapping("/createBoat")
    public ResponseEntity createBoats(@RequestBody Boat b){

        if(b == null){
            return ResponseEntity.badRequest().body("Error params");
        }

        Boat newBoat = boatRep.save(b);

        return ResponseEntity.ok(newBoat);

    }

    @DeleteMapping("/delete/{idBoat}")
    public ResponseEntity deleteBoat(@PathVariable(name = "idBoat") Long idBoat){

        if(idBoat == null){
            return ResponseEntity.badRequest().body("Error params");
        }

        //test si l'id est OK
        Optional<Boat> boatDel = boatRep.findById(idBoat);

        if(!boatDel.isPresent()){
            return  ResponseEntity.notFound().build();
        }

        boatRep.deleteById(idBoat);

        return ResponseEntity.ok().build();
    }


    @PutMapping("/update")
    public ResponseEntity updateBoat(@RequestBody Boat b){

        System.out.println("test");

        if(b == null){
            return ResponseEntity.badRequest().body("Error params");
        }
        //test si le boat exist
        Optional<Boat> currentBoat = boatRep.findById(b.getId());

        if(!currentBoat.isPresent()){
            return  ResponseEntity.notFound().build();
        }

        currentBoat.get().setDescription(b.getDescription());
        currentBoat.get().setName(b.getName());

        return ResponseEntity.ok(boatRep.save(currentBoat.get()));
    }



}
