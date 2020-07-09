package com.goat.simpleProject.repositories;

import com.goat.simpleProject.model.Boat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBoat extends JpaRepository<Boat,Long> {
}
