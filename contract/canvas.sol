// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

uint256 constant dim  = 15 * 15;

contract Canvas {
    bytes3 [dim] canvas;
    uint256 [dim] draw_time;

    event Draw(address indexed painter, uint8 index, bytes3 color);

    function draw(uint8 index, bytes3 color) external{
        require(isPaintable(index),"Current pixel on 5 min cooldown."); 
        canvas[index] = color;
        draw_time[index] = block.timestamp;
        emit Draw(msg.sender,index,color);
    }

    function getCanvas() public view returns (bytes3[] memory){
        bytes3[] memory  _canvas = new bytes3[](dim);
        for(uint8 i; i< dim ; i++){
            _canvas[i] = canvas[i];
        }
        return _canvas;
    }

    function isPaintable(uint8 index) public view returns(bool) {
        if (block.timestamp - draw_time[index] > 5 minutes) {
            return true;
        } else {
            return false;
        }
    }
}