$(function() {
  var test = new LoginWidget();
  test.render();
});

/*
var config = {
  salt: "<('.'<)~(^.^)~(>'.')> I sing the body electric. http://farm3.static.flickr.com/2501/4125017869_4853d4dabb_z.jpg"
};
(function($){
  $.fn.params = function(fn) {
    var params = {};
    this.find('input').each(function(){ 
     params[$(this).attr('name')] = $(this).val();
     if(fn !== undefined) fn(this);
    });
    return params;
  }
})(jQuery);

function Err(msg) {
  return Msg(msg).addClass('errorMsg');
}
function Msg(msg) {
  return $('<div/>').html(msg);
}
$(function(){
  $('.loadbar').each(function() {
    var progress = $(this).attr('p') == undefined ? 100 : $(this).attr('p');
    $(this).progressbar({
      value:progress
    }); 
  });
  // Setup Templates/Widgets
  $('#project').dialog(Object.merge({},defaultWidgets,{
    title: 'Projects',
    resizable: true,
    width:200,
    height:300
  }));
  $('#toolbox').dialog(Object.merge({},defaultWidgets,{
    title: 'Toolbox',
    resizable: true,
    height: 350,
    width:150
  }));
  $('#jixel').dialog(Object.merge({},defaultWidgets,{
    title: 'Jixel',
    buttons: {
      'Stop': function() {
        
      },
      'Play': function() {
        
      }
    }
  }));
  $('#connecting').dialog(Object.merge({},defaultWidgets,{
    title: 'Connecting...',
    autoOpen: true
  }));
  $('#login').dialog(Object.merge({},defaultWidgets,{
    title: 'Login to Jixel!',
    buttons: {
      'Create Account': function() {
        $('#login').dialog('close');
        $('#createAccount').dialog('open');
      },
      'Login': function() {
        $('#login').dialog('close');
        $('#connecting').dialog('open').dialog({title:'Logging in.....'});
        var params = $('#login').params();
        params.password = $.sha1(params.password+config.salt);
        jxlNode.remote.login(params, function(iface){
            jxlNode.remote = iface;
            $('#connecting').dialog('close');
            $('#jixel, #toolbox, #project').dialog('open');
            $('#bar').show();
          }, function(err) {
          $('#connecting').dialog('close');
          $('#login').dialog('open');
          $('#login').prepend($('<div/>').addClass('msg').append(Err(err.message)));
        });
      }
    }
  }));
  $('#createAccount').dialog(Object.merge({},defaultWidgets,{
    title: 'Create Jixel Account!',
    buttons: {
      'Nah, man': function() {
        $('#createAccount').dialog('close');
        $('#login').dialog('open');
        $('#createAccount .msg').remove();
        $('#createAccount input').removeClass('errorInput');
      },
      'Create': function() {
        $('#createAccount .msg').remove();
        $('#createAccount input').removeClass('errorInput');
        var err = false;
        var msg = $('<div/>').addClass('msg')[0];
        var params = {};
        $('#createAccount input').each(function() {
          params[$(this).attr('name')] = $(this).val();
          if($.trim($(this).val()) == '') {
            err = true;
            $(this).addClass('errorInput');
            if($(msg).children().length == 0) {
              $(msg).append(Err('Fill out the form, yo'));
            }
          }
        });
        if(err) {
          $('#createAccount').prepend(msg);
        } else {
          params.password = $.sha1(params.password+config.salt);
          jxlNode.remote.create(params, function() {
            $('#createAccount').dialog('close');
            $('#login').dialog('open');
            $('#login').prepend($(msg).append(Msg('Created your acccount, %r'.replace('%r',params.name))));
          }, function(errs) {
            errs.each(function(err) {
              $('#createAccount input[name="'+err.name+'"]').addClass('errorInput');
              $(msg).append(Err(err.message));
            });
            $('#createAccount').prepend(msg);
          });
        }
      }
    }
  }));
  
  var JixelNode = new Class({
    initialize: function(callback) {
      var self = this;
      this.remote = null;
      DNode.connect(function(remote) {
        remote.ready(function(interface) {
            self.remote = interface;
            callback();
          });
      });
    }
  });
  
  jxlNode = new JixelNode(function() {
    $('#connecting').dialog('close');
    $('#login').dialog('open');  
  });
  
});
*/