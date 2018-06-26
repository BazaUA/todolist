package com.todo.list.dao;

public interface IToDoItemsDAOCustom {
    int done(long id);
    int undone(long id);
}
