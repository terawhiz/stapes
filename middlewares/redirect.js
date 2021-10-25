'use strict'

const saveUrl = require('../models/urlDetails');

const redirect = async (req, res, next) => {
    const shortUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    try {
        const found = await saveUrl.find({ shortUrl });
	if (found){
        	res.set('location', found[0].longUrl);
        	res.status(307).send(`redirecting to ${found[0].longUrl}`);
	}else{
		res.status(404).send('<h1>BAD URL</h1><hr><p>404<br>go back to home page...</p>');
	}
    }catch(e){
        res.status(404).json({
		error: true,
		message: 'something bad happened'
	});
    }
}

module.exports = redirect;
