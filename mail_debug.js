var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",
   auth: {
       user: "do_not_reply@website.com",
       pass: "password"
   }
});

function mailDebug() {
	this.protocol = smtpTransport;
}

mail_debug.prototype.sendEmail = function(details, data) {
	protocol.sendMail({
		from: "Mail Debug <do_not_reply@holidayextras.com>",
		to: "Web Dev <" + details.email + ">",
		subject: 'Mail Debug - ' + 
							if(details.subject != '') { details.subject },
		text:
				if(data.fileName != '') { data.fileName } + ' \r\n' +
				if(data.functionName != '') { data.functionName } + ' \r\n' +
				//foreach object in data.objects add to text
				, 		
	});
}

modules.export = mailDebug;
