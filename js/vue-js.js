var app = new Vue({
    el: '#app',
    data: {
     invite_tech:false,
     create_roll:false,
     view_more_session:false,
     invoice:false,
     cancelSubscribe:false,
     editTech:false,
     drop_head_menu:true,
     changePassword:false,
     notification_bell:true,
     technicianActive: true,
     options: [
       {text: 'Active', value: true},
       {text: 'Pending', value: false},
     ],
     Edit_invite_tech:false,
     deleteTech:false,
    }
  })