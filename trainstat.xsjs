var conn;
try {
	//conn = $.hdb.getConnection();
	

	conn = $.hdb.getConnection({ "xssqlcc": "ACCESS_TEST.FD::anonuser"}); 
	
	var fn = conn.loadProcedure("GUNAWF01", "ACCESS_TEST.FD.STORED_PROCEDURES::PR_010_HTS_SQL_TRAINSTATS");
	var fnResult = fn();
	conn.commit();
	conn.close();
	
	
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(fnResult));
	$.response.status = $.net.http.OK;
	
} catch (err) {
    $.response.contentType = "text/plain";
    $.response.setBody("Error while executing query: [" + err.message + "]");
    $.response.returnCode = 200;
}


