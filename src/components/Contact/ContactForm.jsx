import { useState } from 'react';
import { saveComment } from '../../utils/indexedDB';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submittedComment, setSubmittedComment] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validasi form
        if (!name || !email || !message) {
            alert("Harap isi semua kolom pada formulir sebelum menyimpan.");
            return;
        }
        
        const comment = { name, email, message };
        try {
            await saveComment(comment);
            console.log("Komentar berhasil disimpan.");
            alert('Komentar berhasil disimpan di IndexedDB!');

            // Update state untuk menampilkan komentar yang baru saja dikirim
            setSubmittedComment(comment);

            // Reset form setelah submit
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Gagal menyimpan komentar:', error);
            alert("Terjadi kesalahan saat menyimpan komentar.");
        }
    };

    return (
        <section id='Contact' className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                </p>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Let us know how we can help you"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="email@example.com"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea
                            id="message"
                            rows="6"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Leave a comment..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Send message
                    </button>
                </form>
                {submittedComment && (
                    <div className="mt-8 p-4 bg-green-100 rounded-lg dark:bg-green-800">
                        <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">Komentar Terkirim:</h3>
                        <p><strong>Nama:</strong> {submittedComment.name}</p>
                        <p><strong>Email:</strong> {submittedComment.email}</p>
                        <p><strong>Pesan:</strong> {submittedComment.message}</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ContactForm;