create database interestcalculator;

create table paymentRate(
"id" serial unique,
"transactionType" varchar(32) not null primary key,
"transactionPercentage" decimal not null,
"monthPercentage" decimal
);

create table users(
"id" serial unique,
"username" varchar(32) not null primary key,
"password" varchar(856) not null unique,
);

INSERT INTO "paymentrate"("transactionType", "transactionPercentage", "monthPercentage") VALUES('cash', -10, 0);
INSERT INTO "paymentrate"("transactionType", "transactionPercentage", "monthPercentage") VALUES('pix', -15, 0);
INSERT INTO "paymentrate"("transactionType", "transactionPercentage", "monthPercentage") VALUES('debit', -5, 0);
INSERT INTO "paymentrate"("transactionType", "transactionPercentage", "monthPercentage") VALUES('credit', 0, 1);

---

Requisitions:
{
"type" : "userRegister",
"username": "20",
"password": "5"
}

===================
{
"type" : "userLogin",
"username": "20",
"password": "5"
}

========

{
"totalValue" : 2000,
"downPaymentOn": 250,
"installmentsNumber": 5
}

===========
