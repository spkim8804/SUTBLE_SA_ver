# SUTBLE_SA_ver
This is "SUBTLE visualization homepage" for the stand-alone version.
 
It is necessary to use "python server" to open project.

# Installation
1. Download the github files or simply type the following code in your desired location.
   `````
   git clone https://github.com/spkim8804/SUTBLE_SA_ver.git
2. Open "index.html" file using "Visual Studio Code".
3. Click the "TERMINAL" in the bottom panel or "Ctrl + `" to enter the terminal.
4. Run the python server by run below code.
   `````
   python -m http.server
5. Open Chrome (or other browser) and type `http://localhost:8000/index.html` to run the homepage.


# Demo features
![Demo manual](https://github.com/spkim8804/SUTBLE_SA_ver/blob/master/files/photo/demo_manual.png)
1. Upload folder: You can upload the videos (must *.mp4) and *.csv files (only avatar format available). You should use the same filename for *.mp4 and *.csv
   (For example, "test.csv" and "test.mp4)
2. Plot visualization: You can visualize the supercluster (especially 6 supercluster option) UMAP embedding.
3. Current frame: Indicate the actual frame number in action skeleton (or video)
4. Filelist: If you upload multiple files, you can choose one.
5. Controller: You can modulate fps, play/pause, limbs, and Time (frame)
6. Annotation filter: You can visualize your desired annotation. Multiple choice is available. If you have various labels, it can be changed by scroll on the top.
   (See file format for detail)


# File format (important)
Currently, only avatar version can be visualized. Here is the *.csv format.

![csv_format](https://github.com/spkim8804/SUTBLE_SA_ver/blob/master/files/photo/csv_format.png)

You can find a example *.csv file in the files/ko_young_7701.csv
