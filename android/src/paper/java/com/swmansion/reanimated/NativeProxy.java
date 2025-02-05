package com.swmansion.reanimated;

import android.util.Log;

import com.facebook.jni.HybridData;
import com.facebook.proguard.annotations.DoNotStrip;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.queue.MessageQueueThread;
import com.facebook.react.turbomodule.core.CallInvokerHolderImpl;
import com.swmansion.reanimated.layoutReanimation.AnimationsManager;
import com.swmansion.reanimated.layoutReanimation.LayoutAnimations;
import com.swmansion.reanimated.layoutReanimation.NativeMethodsHolder;
import com.swmansion.reanimated.nativeProxy.NativeProxyCommon;

import java.lang.ref.WeakReference;
import java.util.HashMap;

public class NativeProxy extends NativeProxyCommon {
    @DoNotStrip
    @SuppressWarnings("unused")
    private final HybridData mHybridData;

    public NativeProxy(ReactApplicationContext context) {
        super(context);
        CallInvokerHolderImpl holder =
                (CallInvokerHolderImpl) context.getCatalystInstance().getJSCallInvokerHolder();
        LayoutAnimations LayoutAnimations = new LayoutAnimations(context);
        mHybridData =
                initHybrid(
                        context.getJavaScriptContextHolder().get(),
                        holder,
                        mScheduler,
                        LayoutAnimations);
        prepareLayoutAnimations(LayoutAnimations);
        ReanimatedMessageQueueThread messageQueueThread = new ReanimatedMessageQueueThread();
        installJSIBindings(messageQueueThread);
    }

    private native HybridData initHybrid(
            long jsContext,
            CallInvokerHolderImpl jsCallInvokerHolder,
            Scheduler scheduler,
            LayoutAnimations LayoutAnimations);

    private native void installJSIBindings(MessageQueueThread messageQueueThread);

    public native boolean isAnyHandlerWaitingForEvent(String eventName);

    public native void performOperations();

    @Override
    protected HybridData getHybridData() {
        return mHybridData;
    }

    public static NativeMethodsHolder createNativeMethodsHolder(LayoutAnimations layoutAnimations) {
        WeakReference<LayoutAnimations> weakLayoutAnimations = new WeakReference<>(layoutAnimations);
        return new NativeMethodsHolder() {
            @Override
            public void startAnimation(int tag, String type, HashMap<String, Float> values) {
                LayoutAnimations layoutAnimations = weakLayoutAnimations.get();
                if (layoutAnimations != null) {
                    HashMap<String, String> preparedValues = new HashMap<>();
                    for (String key : values.keySet()) {
                        preparedValues.put(key, values.get(key).toString());
                    }
                    layoutAnimations.startAnimationForTag(tag, type, preparedValues);
                }
            }

            @Override
            public boolean isLayoutAnimationEnabled() {
                LayoutAnimations layoutAnimations = weakLayoutAnimations.get();
                if (layoutAnimations != null) {
                    return layoutAnimations.isLayoutAnimationEnabled();
                }
                return false;
            }

            @Override
            public boolean hasAnimation(int tag, String type) {
                LayoutAnimations layoutAnimations = weakLayoutAnimations.get();
                if (layoutAnimations != null) {
                    return layoutAnimations.hasAnimationForTag(tag, type);
                }
                return false;
            }

            @Override
            public void clearAnimationConfig(int tag) {
                LayoutAnimations layoutAnimations = weakLayoutAnimations.get();
                if (layoutAnimations != null) {
                    layoutAnimations.clearAnimationConfigForTag(tag);
                }
            }

            @Override
            public void cancelAnimation(int tag, String type, boolean cancelled, boolean removeView) {
                LayoutAnimations layoutAnimations = weakLayoutAnimations.get();
                if (layoutAnimations != null) {
                    layoutAnimations.cancelAnimationForTag(tag, type, cancelled, removeView);
                }
            }

            @Override
            public int findPrecedingViewTagForTransition(int tag) {
                LayoutAnimations layoutAnimations = weakLayoutAnimations.get();
                if (layoutAnimations != null) {
                    return layoutAnimations.findPrecedingViewTagForTransition(tag);
                }
                return -1;
            }
        };
    }
}
