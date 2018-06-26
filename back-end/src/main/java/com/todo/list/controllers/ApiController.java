package com.todo.list.controllers;

import com.todo.list.entities.ToDoItemEntity;
import com.todo.list.services.IToDoItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController {
    @Autowired
    private IToDoItemsService itemsService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/items")
    public ResponseEntity<List<ToDoItemEntity>> getAllItems() {
        List<ToDoItemEntity> result = itemsService.getAllItems();
        if (result == null) {
            return new ResponseEntity(HttpStatus.CONFLICT);
        }
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/items/{id}")
    public ResponseEntity<ToDoItemEntity> getItemById(@PathVariable("id") long id) {
        ToDoItemEntity result = itemsService.getItemById(id);
        if (result == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/item", consumes = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.PUT)
    public @ResponseBody
    ResponseEntity<ToDoItemEntity> addItem(@Valid @RequestBody ToDoItemEntity newItem) {
        System.out.println(newItem);
        ToDoItemEntity item = null;
        if (newItem.getName() != null)
            item = itemsService.addItem(newItem);
        if (item == null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        ResponseEntity<ToDoItemEntity> response = new ResponseEntity<ToDoItemEntity>(item, HttpStatus.CREATED);
        return response;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/item")
    public ResponseEntity<Void> updateItem(@RequestBody ToDoItemEntity updatedItem) {
        ToDoItemEntity item = itemsService.updateItem(updatedItem);
        if (item == null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/item/{item_id}")
    public ResponseEntity<Void> deleteItem(@PathVariable("item_id") long item_id) {
        itemsService.deleteItem(item_id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/done")
    public ResponseEntity<Void> incrementItemCount(@RequestBody long id) {
        boolean flag = itemsService.setItemDone(id);
        if (flag) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/undone")
    public ResponseEntity<Void> decrementItemCount(@RequestBody long id) {
        boolean flag = itemsService.setItemUndone(id);
        if (flag) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

}
