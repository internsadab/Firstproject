
        // Simple, self-contained counter script — unobtrusive and accessible
        (function(){
            const countEl = document.getElementById('count');
            const inc = document.getElementById('inc');
            const reset = document.getElementById('reset');
            let value = 0;

            function render(){
                countEl.textContent = value;
            }
            inc.addEventListener('click', ()=>{ value++; render(); });
            dec.addEventListener('click', ()=>{ value--; render(); });
            reset.addEventListener('click', ()=>{ value = 0; render(); });

            // keyboard support
            inc.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); value++; render(); } })
            dec.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); value++; render(); } });
            reset.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); value = 0; render(); } });

        // render();
        })();
