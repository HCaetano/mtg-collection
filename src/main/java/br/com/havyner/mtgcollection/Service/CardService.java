package br.com.havyner.mtgcollection.Service;

import br.com.havyner.mtgcollection.Entity.CardEntity;
import br.com.havyner.mtgcollection.Repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CardService {

    @Autowired
    private CardRepository repository;

    @Transactional
    public CardEntity save(CardEntity card) {
        return repository.save(card);
    }

    @Transactional
    public CardEntity update(CardEntity card, Integer id) {
        card.setId(id);

        return repository.save(card);
    }

    @Transactional
    public void delete(Integer id) {
        repository.deleteById(id);
    }

    @Transactional
    public CardEntity findById(Integer id) {
        Optional<CardEntity> card = repository.findById(id);

        return card.get();
    }

    @Transactional
    public List<CardEntity> findAll() {
        return repository.findAll();
    }
}
