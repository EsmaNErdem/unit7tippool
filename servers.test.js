describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      serverNameInput.value = 'Alice';
    });
  
    it('should add a new server to allServers on submitServerInfo()', function () {
      submitServerInfo();
      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });
  
    it("should recognize empty serverName input", function (){
      serverNameInput.value = '';
      submitServerInfo();
      expect(Object.keys(allServers).length).toEqual(0);
    })
  
    it ('should add server names under server table', function (){
      submitServerInfo();
      updateServerTable();
      expect(document.querySelector('#server1').children[0].innerHTML).toEqual('Alice')
    })
  
    afterEach(function() {
      // teardown logic
      serverTbody.innerHTML = '';
      allServers = {};
      serverId = 0;
  
    });
  });
  