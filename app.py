from flask import Flask
from datetime import datetime
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
import tensorflow as tf
import json
import os
import pdfkit
from flask import send_file     
from PIL import Image
from fpdf import FPDF
 
from PyPDF2 import PdfMerger, PdfReader

from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename
from sklearn import metrics
from flask import Flask, jsonify, request
from sklearn.model_selection import train_test_split

from sklearn.preprocessing import StandardScaler
import numpy as np
from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
from werkzeug.datastructures import  FileStorage
    
from sklearn.metrics import ConfusionMatrixDisplay
from sklearn.metrics import confusion_matrix






app = Flask(__name__,static_folder='/React_frontend/graphs_and_images',template_folder='/home/harsh/personal_project/new/Doc-Gen-Corridor/flask/templates')




def render_mpl_table(data, col_width=3.0, row_height=0.625, font_size=14,
                     header_color='#40466e', row_colors=['#f1f1f2', 'w'], edge_color='w',
                     bbox=[0, 0, 1, 1], header_columns=0,
                     ax=None, **kwargs):
    if ax is None:
        size = (np.array(data.shape[::-1]) + np.array([0, 1])) * np.array([col_width, row_height])
        fig, ax = plt.subplots(figsize=size)
        ax.axis('off')
    mpl_table = ax.table(cellText=data.values, bbox=bbox, colLabels=data.columns, **kwargs)
    mpl_table.auto_set_font_size(False)
    mpl_table.set_fontsize(font_size)

    for k, cell in mpl_table._cells.items():
        cell.set_edgecolor(edge_color)
        if k[0] == 0 or k[1] < header_columns:
            cell.set_text_props(weight='bold', color='w')
            cell.set_facecolor(header_color)
        else:
            cell.set_facecolor(row_colors[k[0]%len(row_colors) ])
    return ax.get_figure(), ax



UPLOAD_FOLDER = os.path.basename('/')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/')
def hello_world():
    return render_template('index_new.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    
    file = request.files['image']
    f = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    
    # add your custom code to check that the uploaded file is a valid image and not a malicious file (out-of-scope for this post)
    file.save(f)
    df = pd.read_excel(f)

    plt.hist(df['fico'], bins=25, alpha=0.45, color='yellow')
    plt.title("fico")
    plt.legend(['fico'])
    
    plt.savefig('fico.png', dpi=10)


    plt.hist(df['utilization'], bins=25, alpha=0.45, color='blue')
    plt.title("Utilization")
    plt.legend(['Utilization'])
    plt.savefig('React_frontend/graphs_and_images/Utilization.png', dpi=100)
    
    
    plt.hist(df['card_limit'], bins=25, alpha=0.45, color='black')
    plt.title("card_limit")
    plt.legend(['card_limit'])
    plt.savefig('React_frontend/graphs_and_images/card_limit.png', dpi=100)
    
    plt.hist(df['card_interest_rate'], bins=25, alpha=0.45, color='red')
    plt.title("card_interest_rate")
    plt.legend(['card_interest_rate'])
    plt.savefig('React_frontend/graphs_and_images/card_interest_rate.png', dpi=100)
    
    plt.hist(df['monthly_salary'], bins=25, alpha=0.45, color='green')
    plt.title("monthly_salary")
    plt.legend(['monthly_salary'])
    plt.savefig('React_frontend/graphs_and_images/monthly_salary.png', dpi=100)
    
    plt.hist(df['model_target'], bins=25, alpha=0.45, color='red')
    plt.hist(df['model_target'], bins=25, alpha=0.45, color='blue')
    plt.title("model_target")
    plt.legend(['model_target'])
    plt.savefig('React_frontend/graphs_and_images/odel_target.png', dpi=100)

    fig,ax = render_mpl_table(df.head(), header_columns=0, col_width=4.0)
    fig.savefig("React_frontend/graphs_and_images/data_head.png")

    fig,ax = render_mpl_table(df.describe(), header_columns=0, col_width=4.0)
    fig.savefig("React_frontend/graphs_and_images/statistical_info.png")

 

 
 

    image_1 = Image.open('/home/harsh/personal_project/new/Doc-Gen-Corridor/flask/React_frontend/graphs_and_images/card_limit.png') 
    #image_2 = Image.open('/home/harsh/personal_project/new/Doc-Gen-Corridor/flask/React_frontend/graphs_and_images/data_head.png')
    image_3 = Image.open('/home/harsh/personal_project/new/Doc-Gen-Corridor/flask/React_frontend/graphs_and_images/fico.png')
    image_4 = Image.open('/home/harsh/personal_project/new/Doc-Gen-Corridor/flask/React_frontend/graphs_and_images/monthly_salary.png')
    image_5 = Image.open('/home/harsh/personal_project/new/Doc-Gen-Corridor/flask/React_frontend/graphs_and_images/odel_target.png')
    #image_6 = Image.open('/home/harsh/personal_project/new/Doc-Gen-Corridor/flask/React_frontend/graphs_and_images/statistical_info.png')
    image_7 = Image.open('/home/harsh/personal_project/new/Doc-Gen-Corridor/flask/React_frontend/graphs_and_images/tr_tn.png')
    image_8 = Image.open('/home/harsh/personal_project/new/Doc-Gen-Corridor/flask/React_frontend/graphs_and_images/Utilization.png')
    image_9 = Image.open('/home/harsh/personal_project/new/Doc-Gen-Corridor/flask/React_frontend/graphs_and_images/confusion_matrix.png')
    image_10 = Image.open('/home/harsh/personal_project/new/Doc-Gen-Corridor/flask/React_frontend/graphs_and_images/tr_tn.png')

    im_1 = image_1.convert('RGB')
    #im_2 = image_2.convert('RGB')
    im_3 = image_3.convert('RGB')
    im_4 = image_4.convert('RGB')
    im_5 = image_5.convert('RGB')
    #im_6 = image_6.convert('RGB')
    im_7 = image_7.convert('RGB')
    im_8 = image_8.convert('RGB')
    im_9 = image_9.convert('RGB')
    im_10 = image_10.convert('RGB')

    image_list = [im_1,im_3,im_4,im_5,im_7,im_8,im_9,im_10]
    im_1.save('report.pdf', save_all=True, append_images=image_list)
    

    merger = PdfMerger()

    merger.append(PdfReader(open('/home/harsh/personal_project/new/Doc-Gen-Corridor/flask/data/raw' + ".pdf", 'rb')))
    merger.append(PdfReader(open('report' + ".pdf", 'rb')))
    
    merger.write("merged.pdf")


    return redirect('/download')


@app.route('/download')
def downloadFile ():
    #For windows you need to use drive name [ex: F:/Example.pdf]
    path = "/home/harsh/personal_project/new/Doc-Gen-Corridor/flask/merged.pdf"
    return send_file(path, as_attachment=True)


@app.route("/csv_upload",methods = ['GET', 'POST'])
def index():
    
    
    req_data = request.get_json()
    with open('output.json', 'w') as outfile:
        json.dump(req_data, outfile)
    with open('output.json', encoding = 'utf-8') as f :
        df = pd.read_json(f)

    #df = pd.read_excel('dataset.xlsx')
    
    
    plt.hist(df['fico'], bins=25, alpha=0.45, color='yellow')
    plt.title("fico")
    plt.legend(['fico'])
    plt.savefig('React_frontend/graphs_and_images/fico.png', dpi=100)

    plt.hist(df['utilization'], bins=25, alpha=0.45, color='blue')
    plt.title("Utilization")
    plt.legend(['Utilization'])
    plt.savefig('React_frontend/graphs_and_images/Utilization.png', dpi=100)
    
    
    plt.hist(df['card_limit'], bins=25, alpha=0.45, color='black')
    plt.title("card_limit")
    plt.legend(['card_limit'])
    plt.savefig('React_frontend/graphs_and_images/card_limit.png', dpi=100)
    
    plt.hist(df['card_interest_rate'], bins=25, alpha=0.45, color='red')
    plt.title("card_interest_rate")
    plt.legend(['card_interest_rate'])
    plt.savefig('React_frontend/graphs_and_images/card_interest_rate.png', dpi=100)
    
    plt.hist(df['monthly_salary'], bins=25, alpha=0.45, color='green')
    plt.title("monthly_salary")
    plt.legend(['monthly_salary'])
    plt.savefig('React_frontend/graphs_and_images/monthly_salary.png', dpi=100)
    
    plt.hist(df['model_target'], bins=25, alpha=0.45, color='blue')
    plt.title("model_target")
    plt.legend(['model_target'])
    plt.savefig('React_frontend/graphs_and_images/odel_target.png', dpi=100)

    #fig,ax = render_mpl_table(df.head(), header_columns=0, col_width=4.0)
    #fig.savefig("React_frontend/graphs_and_images/data_head.png")
    
    #fig,ax = render_mpl_table(df.describe(), header_columns=0, col_width=4.0)
    #fig.savefig("React_frontend/graphs_and_images/statistical_info.png")
   
    
    return "Succesfully generated"
 

@app.route("/create_model",methods = ['GET', 'POST'])
def model():
    
    
    req_data = request.get_json()
    with open('output.json', 'w') as outfile:
        json.dump(req_data, outfile)
    with open('output.json', encoding = 'utf-8') as f :
        df = pd.read_json(f)

    #df = pd.read_excel('dataset.xlsx')


    df['monthly_salary']= StandardScaler().fit_transform(df['monthly_salary'].values.reshape(-1,1))
    df['fico']= StandardScaler().fit_transform(df['fico'].values.reshape(-1,1))
    df['utilization']= StandardScaler().fit_transform(df['utilization'].values.reshape(-1,1))
    df['card_limit']= StandardScaler().fit_transform(df['card_limit'].values.reshape(-1,1))
    df['card_interest_rate']= StandardScaler().fit_transform(df['card_interest_rate'].values.reshape(-1,1))
    df['model_output']= StandardScaler().fit_transform(df['model_output'].values.reshape(-1,1))


    np.random.seed(1234)
    X = df.drop(labels='model_target',axis=1)
    Y = df.model_target
    x_train,x_test,y_train,y_test = train_test_split( X, Y, test_size=0.2 )
    print(x_train.shape)
    x_train = np.asarray(x_train).astype(np.float32)
    y_train = np.asarray(y_train).astype(np.float32)
    model = tf.keras.Sequential([
    tf.keras.layers.Flatten(input_shape=[6]),
    tf.keras.layers.Dense(64,activation='relu'),
    tf.keras.layers.Dense(64,activation='relu'),
    tf.keras.layers.Dense(1,activation='sigmoid')
    ])

    model.compile(loss='binary_crossentropy',
                optimizer=tf.keras.optimizers.Adam(learning_rate=0.00000001),
                metrics=['accuracy'])
    results = model.fit(x_train, y_train, 
                    batch_size = 15,
                    epochs=15,verbose=1,
                    validation_data=(x_test, y_test))

    
    score = model.evaluate(x_test, y_test, verbose=0)
    y_pred = model.predict(x_test)
    for i in range(len(y_pred)):
        if y_pred[i]<0.5:
            y_pred[i]=0
    else:
        y_pred[i]=1
    
    result = confusion_matrix(y_test, y_pred)
    cm_display = metrics.ConfusionMatrixDisplay(confusion_matrix = result, display_labels = [False, True])

    cm_display.plot()
    plt.savefig('React_frontend/graphs_and_images/confusion.png', dpi=100)

    fpr, tpr, _ = metrics.roc_curve(y_test,  y_pred)
    plt.plot(fpr,tpr)
    plt.ylabel('True Positive Rate')
    plt.xlabel('False Positive Rate')
    plt.savefig('React_frontend/graphs_and_images/tp_tn.png', dpi=100)


    fpr, tpr, _ = metrics.roc_curve(y_test,  y_pred)
    auc = metrics.roc_auc_score(y_test, y_pred)


    plt.plot(fpr,tpr,label="AUC="+str(auc))
    plt.ylabel('True Positive Rate')
    plt.xlabel('False Positive Rate')
    plt.legend(loc=4)
    plt.show()
    return "Success"


@app.route("/generate_matrix",methods = ['GET', 'POST'])
def generate():
    
    req_data = request.get_json()
    with open('output.json', 'w') as outfile:
        json.dump(req_data, outfile)
    with open('output.json', encoding = 'utf-8') as f :
        df = pd.read_json(f)

    #df = pd.read_excel('dataset.xlsx')

    np.random.seed(1234)
    X = df.drop(labels='model_target',axis=1)
    Y = df.model_target
    x_train,x_test,y_train,y_test = train_test_split( X, Y, test_size=0.2 )
    print(x_train.shape)
    model = tf.keras.models.load_model('my_model.h5')
    score = model.evaluate(x_test, y_test, verbose=0)
    y_pred = model.predict(x_test)
    for i in range(len(y_pred)):
        if y_pred[i]<0.5:
            y_pred[i]=0
    else:
        y_pred[i]=1
    
    result = confusion_matrix(y_test, y_pred)
    cm_display = metrics.ConfusionMatrixDisplay(confusion_matrix = result, display_labels = [False, True])

    cm_display.plot()
    plt.savefig('React_frontend/graphs_and_images/confusion.png', dpi=100)

    fpr, tpr, _ = metrics.roc_curve(y_test,  y_pred)
    plt.plot(fpr,tpr)
    plt.ylabel('True Positive Rate')
    plt.xlabel('False Positive Rate')
    plt.savefig('React_frontend/graphs_and_images/tp_tn.png', dpi=100)


    fpr, tpr, _ = metrics.roc_curve(y_test,  y_pred)
    auc = metrics.roc_auc_score(y_test, y_pred)


    plt.plot(fpr,tpr,label="AUC="+str(auc))
    plt.ylabel('True Positive Rate')
    plt.xlabel('False Positive Rate')
    plt.legend(loc=4)
    plt.show()
    return "Success"


if __name__ == "__main__":
    app.debug = True
    app.run()