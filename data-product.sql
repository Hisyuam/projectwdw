CREATE DATABASE db_produk;
USE db_produk;
CREATE TABLE produk(
    nama_produk VARCHAR(255) NOT NULL,
    deskripsi TEXT,
    harga DECIMAL(10, 2) NOT NULL,
    gambar BLOB,
)

