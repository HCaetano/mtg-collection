package br.com.havyner.mtgcollection.Repository;

import br.com.havyner.mtgcollection.Entity.CardEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardRepository extends CrudRepository<CardEntity, Integer> {

    List<CardEntity> findAll();
}
