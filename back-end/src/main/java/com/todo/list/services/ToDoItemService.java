package com.todo.list.services;

import com.todo.list.dao.IToDoItemsDAO;
import com.todo.list.dao.IToDoItemsDAOCustom;
import com.todo.list.entities.ToDoItemEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ToDoItemService implements IToDoItemsService {
    @Autowired
    IToDoItemsDAO toDoItemsDAO;
    @Autowired
    IToDoItemsDAOCustom toDoItemsDAOCustom;

    @Override
    public List<ToDoItemEntity> getAllItems() {
        return toDoItemsDAO.findAll();
    }

    @Override
    public ToDoItemEntity getItemById(long itemId) {
        Optional<ToDoItemEntity> res = toDoItemsDAO.findById(itemId);
        return res.isPresent() ? res.get() : null;
    }

    @Override
    public ToDoItemEntity addItem(ToDoItemEntity item) {
        return toDoItemsDAO.save(item);
    }

    @Override
    public void deleteItem(long itemId) {
        if(toDoItemsDAO.existsById(itemId)){
            toDoItemsDAO.deleteById(itemId);
        }
    }

    @Override
    public ToDoItemEntity updateItem(ToDoItemEntity updatedEntity) {
        long id = updatedEntity.getId();
        if(toDoItemsDAO.existsById(id)) {
            return toDoItemsDAO.save(updatedEntity);
        }else {
            return null;
        }
    }

//    @Override
//    public boolean incrementItemCount(long itemId) {
//        return toDoItemsDAOCustom.incrementCount(itemId) > 0 ? true : false;
//    }
//
//    @Override
//    public boolean decrementItemCount(long itemId) {
//        return toDoItemsDAOCustom.decrementCount(itemId) > 0 ? true : false;
//    }
}
