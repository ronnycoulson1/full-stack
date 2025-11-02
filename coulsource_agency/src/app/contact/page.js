export default function ContactPage() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="min-h-screen bg-brand-navy text-white flex justify-center items-center">
                <div className="max-w-lg w-full p-6 bg-gray-800 rounded-lg shadow-lg">
                    <h2 className="mb-6 text-2xl tracking-tight font-bold text-center text-gray-200">
                        Need details about our service plan? Let us know!
                    </h2>
                    <form action="#" className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-300"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                placeholder="name@youremail.com"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-sm font-medium text-gray-300"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Project subject"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-300"
                            >
                                Comments
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="block w-full p-2 text-sm bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Optional - Leave a comment"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800"
                        >
                            Send your message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
