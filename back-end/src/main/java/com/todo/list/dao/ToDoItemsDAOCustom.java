package com.todo.list.dao;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

@Repository
@Transactional
public class ToDoItemsDAOCustom implements IToDoItemsDAOCustom {
    @PersistenceContext
    EntityManager entityManager;

    @Override
    public void incrementCount(long id) {
        Query query = entityManager.createNativeQuery("UPDATE Items i SET i.count=(i.count+1) WHERE id=?");
        query.setParameter(1,id);
        query.executeUpdate();
    }

    @Override
    public void decrementCount(long id) {
        Query query = entityManager.createNativeQuery("UPDATE Items i SET i.count=(i.count-1) WHERE id=?");
        query.setParameter(1,id);
        query.executeUpdate();
    }
}
