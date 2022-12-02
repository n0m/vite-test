<%
Server.ScriptTimeout = 30
Response.AddHeader "content-headerType","application/json;charset=utf-8"
Response.ContentType = "application/json"
Response.CodePage = 65001
Response.CacheControl = "no-cache"
Response.Expires = -1
Response.AddHeader "Pragma", "no-cache"
Response.Charset = "utf-8"
%>
{
	"test":"cokolwiek"
}