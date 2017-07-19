/*
 * @author Raquel Díaz González
 */

kurento_room.service('ServiceRoom', function () {

    var kurento;
    var roomName;
    var userName;
    var localStream;
    var userType;

    this.getKurento = function () {
        return kurento;
    };

    this.getRoomName = function () {
        return roomName;
    };

    this.setKurento = function (value) {
        kurento = value;
    };

    this.setRoomName = function (value) {
        roomName = value;
    };

    this.getLocalStream = function () {
        return localStream;
    };

    this.setLocalStream = function (value) {
        localStream = value;
    };

    this.getUserName = function () {
        return userName;
    };

    this.setUserName = function (value) {
        userName = value;
    };
    
    this.getUserType = function () {
        return userType;
    };

    this.setUserType = function (value) {
        userType = value;
    };
});
