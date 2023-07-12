let data=[]/*END*/;
        for (object of data) {
            let post = document.createElement('article'),
                time = new Date(object.time);
            post.innerHTML = `
                <header>
                    <div>
                        ${object.author}
                    </div>
                    <div>
                        <time>
                            ${time.getDate()}.${time.getMonth()+1}.${time.getFullYear()}
                        </time>
                    </div>
                    <div>
                        ${object.community ? object.community : ''}
                    </div>
                    <div>
                        <h2> ${object.title} </h2>
                    </div>
                </header>
                <section>
                    <div>
                        ${object.content.join('\n')}
                    </div>
                </section> `;
            document.querySelector('main').append(post);
        }
