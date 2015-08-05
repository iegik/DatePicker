var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/CalendarConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _calendar = (new Date()).toISOString().split('T')[0]; // collection of todo items

/**
 * Create a TODO item.
 * @param {string} text The content of the TODO
 */
function create(text) {
    // Using the current timestamp in place of a real id.
    var id = Date.now();
    _todos[id] = {
        id: id,
        complete: false,
        text: text
    };
}

/**
 * Delete a TODO item.
 * @param {string} id
 */
function destroy(id) {
    delete _todos[id];
}

var CalendarStore = assign({}, EventEmitter.prototype, {

    /**
     * Get the entire collection of TODOs.
     * @return {object}
     */
    getDate: function () {
        return _calendar;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
        console.log('CHANGE_EVENT');
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
        console.log('CHANGE_EVENT');
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherIndex: AppDispatcher.register(function (payload) {
        var action = payload.action;
        var text;

        switch (action.actionType) {
        case CalendarConstants.CALENDAR_CREATE:
            text = action.text.trim();
            if (text !== '') {
                create(text);
                CalendarStore.emitChange();
            }
            break;

        case CalendarConstants.CALENDAR_DESTROY:
            destroy(action.id);
            CalendarStore.emitChange();
            break;

        case CalendarConstants.CALENDAR_UPDATE_DATE:
            CalendarStore.emitChange();
            break;
            // add more cases for other actionTypes, like TODO_UPDATE, etc.
        }

        return true; // No errors. Needed by promise in Dispatcher.
    })

});

module.exports = CalendarStore;