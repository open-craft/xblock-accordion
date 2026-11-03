FROM openedx/xblock-sdk
RUN mkdir -p /usr/local/src/xblock-accordion
VOLUME ["/usr/local/src/xblock-accordion"]
RUN apt-get update && apt-get install -y gettext
RUN pip install uv
RUN echo "cd /usr/local/src/xblock-accordion && uv export --frozen --no-hashes --no-emit-project --group dev -o /tmp/requirements.txt && cd /usr/local/src/xblock-sdk" >> /usr/local/src/xblock-sdk/install_and_run_xblock.sh
RUN echo "uv pip install --system -r /tmp/requirements.txt -e /usr/local/src/xblock-accordion" >> /usr/local/src/xblock-sdk/install_and_run_xblock.sh
RUN echo "cd /usr/local/src/xblock-accordion && make compile_translations && cd /usr/local/src/xblock-sdk" >> /usr/local/src/xblock-sdk/install_and_run_xblock.sh
RUN echo "exec python /usr/local/src/xblock-sdk/manage.py \"\$@\"" >> /usr/local/src/xblock-sdk/install_and_run_xblock.sh
RUN chmod +x /usr/local/src/xblock-sdk/install_and_run_xblock.sh
ENTRYPOINT ["/bin/bash", "/usr/local/src/xblock-sdk/install_and_run_xblock.sh"]
CMD ["runserver", "0.0.0.0:8000"]
