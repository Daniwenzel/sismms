library(odbc)

con <- dbConnect(odbc::odbc(), dsn='measures')

listaTorres <- dbGetQuery(con, "SELECT cli.razaosocial,sit.DESSITE, sit.CODIGO FROM SITE sit join CLIENTE cli on sit.clicodigo=cli.codigo order by cli.razaosocial ASC, sit.dessite ASC")

cat("unless directed to a file", file = "out.Rout")