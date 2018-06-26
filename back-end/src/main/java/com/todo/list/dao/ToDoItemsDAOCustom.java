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
    public int done(long id) {
        Query query = entityManager.createNativeQuery("UPDATE Items i SET i.is_done=1 WHERE id=?");
        query.setParameter(1, id);
        return query.executeUpdate();
    }

    @Override
    public int undone(long id) {
        Query query = entityManager.createNativeQuery("UPDATE Items i SET i.is_done=0 WHERE id=?");
        query.setParameter(1, id);
        return query.executeUpdate();
    }
}
