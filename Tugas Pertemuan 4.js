class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }
}

let daftarPelanggan = [];

function sewaKendaraan(nama, nomorTelepon, kendaraanDisewa) {
    const pelangganBaru = new Pelanggan(nama, nomorTelepon, kendaraanDisewa);
    daftarPelanggan.push(pelangganBaru);
    console.log(`${nama} telah menyewa ${kendaraanDisewa}.`);
}

function tampilkanPelanggan() {
    console.log("Daftar Pelanggan yang Sedang Menyewa Kendaraan:");
    daftarPelanggan.forEach((pelanggan, index) => {
        console.log(`${index + 1}. Nama: ${pelanggan.nama}, No. Telepon: ${pelanggan.nomorTelepon}, Kendaraan: ${pelanggan.kendaraanDisewa}`);
    });
}

sewaKendaraan("Andi", "08123456789", "Mobil Avanza");
sewaKendaraan("Budi", "08987654321", "Motor Beat");

tampilkanPelanggan();
